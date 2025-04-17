import './editor.css'
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {
  $isTextNode,
  TextNode,
} from 'lexical';

import {isDevPlayground} from './appSettings';
import {FlashMessageContext} from './context/FlashMessageContext';
import {SettingsContext, useSettings} from './context/SettingsContext';
import {SharedHistoryContext} from './context/SharedHistoryContext';
import {ToolbarContext} from './context/ToolbarContext';
import Editor from './Editor';
import logo from './images/logo.svg';
import PlaygroundNodes from './nodes/PlaygroundNodes';
import DocsPlugin from './plugins/DocsPlugin';
import PasteLogPlugin from './plugins/PasteLogPlugin';
import {TableContext} from './plugins/TablePlugin';
import TestRecorderPlugin from './plugins/TestRecorderPlugin';
import {parseAllowedFontSize} from './plugins/ToolbarPlugin/fontSize';
import TypingPerfPlugin from './plugins/TypingPerfPlugin';
import Settings from './Settings';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';
import {parseAllowedColor} from './ui/ColorPicker';

console.warn(
  'If you are profiling the playground app, please ensure you turn off the debug view. You can disable it by pressing on the settings control in the bottom-left of your screen and toggling the debug view setting.',
);

function getExtraStyles(element){
  // Parse styles from pasted input, but only if they match exactly the
  // sort of styles that would be produced by exportDOM
  let extraStyles = '';
  const fontSize = parseAllowedFontSize(element.style.fontSize);
  const backgroundColor = parseAllowedColor(element.style.backgroundColor);
  const color = parseAllowedColor(element.style.color);
  if (fontSize !== '' && fontSize !== '15px') {
    extraStyles += `font-size: ${fontSize};`;
  }
  if (backgroundColor !== '' && backgroundColor !== 'rgb(255, 255, 255)') {
    extraStyles += `background-color: ${backgroundColor};`;
  }
  if (color !== '' && color !== 'rgb(0, 0, 0)') {
    extraStyles += `color: ${color};`;
  }
  return extraStyles;
}

function buildImportMap(){
  const importMap = {};

  // Wrap all TextNode importers with a function that also imports
  // the custom styles implemented by the playground
  for (const [tag, fn] of Object.entries(TextNode.importDOM() || {})) {
    importMap[tag] = (importNode) => {
      const importer = fn(importNode);
      if (!importer) {
        return null;
      }
      return {
        ...importer,
        conversion: (element) => {
          const output = importer.conversion(element);
          if (
            output === null ||
            output.forChild === undefined ||
            output.after !== undefined ||
            output.node !== null
          ) {
            return output;
          }
          // const extraStyles = getExtraStyles(element);
          // if (extraStyles) {
          //   const {forChild} = output;
          //   return {
          //     ...output,
          //     forChild: (child, parent) => {
          //       const textNode = forChild(child, parent);
          //       if ($isTextNode(textNode)) {
          //         textNode.setStyle(textNode.getStyle() + extraStyles);
          //       }
          //       return textNode;
          //     },
          //   };
          // }
          return output;
        },
      };
    };
  }

  return importMap;
}

function App(){
  const {
    settings: {isCollab, emptyEditor, measureTypingPerf},
  } = useSettings();

  const initialConfig = {
    editorState: isCollab
      ? null
      : emptyEditor,
    html: {import: buildImportMap()},
    namespace: 'Playground',
    nodes: [...PlaygroundNodes],
    onError: (error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <SharedHistoryContext>
        <TableContext>
          <ToolbarContext>
            <header>
              <a href="https://rumahilmiah.org" target="_blank" rel="noreferrer">
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:20}}>
                    <img src={'/biru.svg'} alt="BRI Logo" style={{height:'20vh'}} />
                    <p style={{fontSize:"3em"}}>Rumah Ilmiah</p>
                </div>
              </a>
            </header>
            <div className="editor-shell">
              <Editor />
            </div>
            <Settings />
            {isDevPlayground ? <DocsPlugin /> : null}
            {isDevPlayground ? <PasteLogPlugin /> : null}
            {isDevPlayground ? <TestRecorderPlugin /> : null}

            {measureTypingPerf ? <TypingPerfPlugin /> : null}
          </ToolbarContext>
        </TableContext>
      </SharedHistoryContext>
    </LexicalComposer>
  );
}

export default function EditorApp(){
  return (
    <>
      <div className="body">
        <SettingsContext>
          <FlashMessageContext>
            <App />
          </FlashMessageContext>
        </SettingsContext>
      </div>
    </>
  );
}