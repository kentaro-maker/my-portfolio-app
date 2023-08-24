"use client";
import React, { useRef, useState } from 'react';

import ReactPDF, { pdf, BlobProvider, usePDF,  PDFViewer ,PDFDownloadLink, Page as PDFPage, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const st = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890 "
const size = {
  A4: { px:[210, 297], pt:[595.28, 841.89] },
  B4: { px:[257, 364], pt:[708.66, 1000.63] },
}


const Page = () => {
  const fil = Array.from(st);
  const [ content, set] = useState<string>('')
  const [pos, setPos] = useState(0)
  const [selectedSize, setSelectedSize] = useState('A4'); 
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [z, setZ] = useState(0)

  const genTmpl = (text: string = "default") => {

    return (
      <Document>
        <PDFPage size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{text}</Text>
          </View>
        </PDFPage>
      </Document>
    )
  }

  const [instance, updateInstance] = usePDF({ document: genTmpl() });

  const outPdf = () => {
    const blob = pdf(genTmpl(content)).toBlob();
    console.log(blob)
  }
  

  const ref = useRef<HTMLTextAreaElement>()
  const rr = useRef()

  const isIncluded = (s:string) => {
    return fil.includes(s)
  }
  const filter = (e) => {
    // console.log(e, pos)
    const type = e.nativeEvent.inputType
    const data = e.nativeEvent.data
    switch(type) {
      case "insertText":
        if(isIncluded(data)) {
          set(content.substring(0, pos) + data + content.substring(pos))
        }
        break;
      case "insertLineBreak":
        set(content + "\n")
        break
      default:
        break;
    }
  }

  const logSelection = (e) => {
    const p = e.target.selectionStart
    // console.log(e.target.selectionStart)
    setPos(p)
  }

  return (
    <>
      <div className="p-8 h-screen w-full bg-slate-300">
        <div className="flex flex-col w-full h-full lg:flex-row">

          <div className="flex-grow h-full flex flex-col">
            {/* <div className="bg-base-300 rounded-box place-items-center">
              <textarea
                ref={ref}
                className="
                max-h-full
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
              "
                value={content}
                onBeforeInput={logSelection}
                onChange={e => filter(e)} id="story" name="story" rows={5} cols={30}>
              </textarea>
            </div> 
            <div className="flex flex-row justify-between">
              <button className="block btn w-64 rounded-full">Button</button>
              <button className="block btn w-64 rounded-full">Button</button>
            </div>  */}
                <div className="flex-none">
                  <pre>
                    { content }
                  </pre>
                </div>
                  <textarea
                    ref={ref}
                    className="
                    grow
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    value={content}
                    onBeforeInput={logSelection}
                    onChange={e => filter(e)} id="story" name="story" rows={5} cols={30}>
                </textarea>
                <div className="flex-row flex justify-between mt-4">
                  <button className="btn block" onClick={outPdf}>Apply</button>
                  <button className="btn block">Download</button>
                </div>
          </div> 

          <div className="divider lg:divider-horizontal">≒</div> 

          <div className="flex-grow card bg-base-300 rounded-box place-items-center">
            <PDFViewer className="w-full h-full">
              <Document>
                <PDFPage size="A4" style={styles.page}>
                  <View style={styles.section}>
                    <Text>{content}</Text>
                  </View>
                </PDFPage>
              </Document>
            </PDFViewer>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {/* <select
           value={selectedSize}
           onChange={e => setSelectedSize(e.target.value)}>
          <option value="A4">A4: 210*297px(595.28*841.89pt)</option>
          <option value="B4">B4: 257*364px(708.66*1000.63pt)</option>
        </select>
        <label>
          <input type='number' defaultValue="20"></input>
          px
        </label>
        <div>
          <label>
            Col-Start:
            <input type='number' defaultValue="20"></input>
            px
          </label>
          <label>
            Col-End:
            <input type='number' defaultValue="20"></input>
            px
          </label>
        </div>
        <div>
          <label>
            Row-Start:
            <input type='number' defaultValue="20"></input>
            px
          </label>
          <label>
            Row-End:
            <input type='number' defaultValue="20"></input>
            px
          </label>
        </div>
      */}
      </div> 

    
    </>
  )
}

export default Page
