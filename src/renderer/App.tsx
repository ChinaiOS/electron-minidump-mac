// import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import { useEffect, useState, createRef } from 'react';
// import icon from '../../assets/icon.svg';
import { useEffect, createRef } from 'react';
import './App.css';

// import { InboxOutlined } from '@ant-design/icons';

// import type { UploadProps } from 'antd';
// import { message, Upload } from 'antd';
import { message } from 'antd';
import { Alert } from 'antd';

import 'antd/dist/antd.css';
// import { Button, Space } from 'antd';

// import React from 'react';

// const { Dragger } = Upload;

// const props: UploadProps = {
//     name: 'file',
//     multiple: true,
//     action: '/Users/zhangchao/Downloads',
//     onChange(info) {
//         const { status } = info.file;
//         if (status !== 'uploading') {
//             console.log(info.file, info.fileList);
//         }
//         if (status === 'done') {
//             message.success(`${info.file.name} file uploaded successfully.`);
//         } else if (status === 'error') {
//             message.error(`${info.file.name} file upload failed.`);
//         }
//     },
//     onDrop(e) {
//         console.log('Dropped files', e.dataTransfer.files);
//     },
// };

// const App: React.FC = () => (
//   // <Dragger {...props}>
//   //   <p className="ant-upload-drag-icon">
//   //     <InboxOutlined />
//   //   </p>
//   //   <p className="ant-upload-text">Click or drag file to this area to upload</p>
//   //   <p className="ant-upload-hint">
//   //     Support for a single or bulk upload. Strictly prohibit from uploading company data or other
//   //     band files
//   //   </p>
//   // </Dragger>
// );

// export default App;

// const Hello = (dropRef) => {
//   return (
//     <div>
//       <div ref={dropRef} className="background">
//         拖入DYSM符号文件
//       </div>
//       <Dragger {...props}>
//         <p className="ant-upload-drag-icon">
//           <InboxOutlined />
//         </p>
//         <p className="ant-upload-text">TEST</p>
//         <p className="ant-upload-hint">TEST</p>
//       </Dragger>
//       <h1>electron-react-boilerplate</h1>

//       {/* <div className="Hello">
//         <img width="200" alt="icon" src={icon} />
//       </div>
//       <div className="Hello">
//         <a
//           href="https://electron-react-boilerplate.js.org/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <button type="button">
//             <span role="img" aria-label="books">
//               📚
//             </span>
//             Read our docs
//           </button>
//         </a>
//         <a
//           href="https://github.com/sponsors/electron-react-boilerplate"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <button type="button">
//             <span role="img" aria-label="folded hands">
//               🙏
//             </span>
//             Donate
//           </button>
//         </a>
//       </div> */}
//     </div>
//   );
// };

export default function App() {
    // 创建组件引用
    let dropRef: any = createRef();

    // const [file, setFile] = useState<boolean>(true);

    // const background = document.getElementsByClassName('background');
    // background.addEventListener("dragover", e => {
    //   // 必须阻止默认事件，这里才会变成可释放区域。
    //   // 如果不写这一句，那么松手的时候，也不会触发相应的 drop 事件
    //   e.preventDefault();
    // });

    useEffect(() => {
        // 监听拖放事件
        const dropArea: any = dropRef.current;
        dropArea.addEventListener('dragover', (event: any) => {
            event.preventDefault();
        });

        dropArea.addEventListener('drop', (event: any) => {
            let items = event.dataTransfer.items;
            for (let i = 0; i <= items.length - 1; i++) {
                let item = items[i];
                if (item.kind === 'file') {
                    // FileSystemFileEntry 或 FileSystemDirectoryEntry 对象
                    let entry = item.webkitGetAsEntry();
                    // 递归地获取entry下包含的所有File
                    console.log(entry);
                    if (entry.isFile) {
                        // setFile(true);
                        entry.file(
                            (file: any) => {
                                // addFileToList({ file, path: entry.fullPath });
                                console.log(file.path);
                                console.log(`${file.path}${entry.fullPath}`);
                            },
                            (e: any) => {
                                console.log(e);
                            }
                        );
                    } else {
                        // setFile(false);
                        message.error('只能是文件');

                        // let reader = entry.createReader();
                        // reader.readEntries(
                        //     entries => {
                        //         entries.forEach(entry => getFileFromEntryRecursively(entry));
                        //     },
                        //     e => {
                        //         console.log(e);
                        //     }
                        // );
                    }
                }
            }
            event.preventDefault();
        });
    }, []);

    return (
        <div ref={dropRef}>
            <div className="background">拖入DYSM符号文件</div>
            {/* <Dragger {...props}>
            <p className="ant-upload-drag-icon">
            <InboxOutlined />
            </p>
            <p className="ant-upload-text">TEST</p>
            <p className="ant-upload-hint">TEST</p>
        </Dragger> */}
            <Alert message="Warning Text" type="warning" />
            <h1>electron-react-boilerplate</h1>
        </div>
    );
}

// {/* // <Router>
// //   <Routes>
// //     <Route path="/" element={<Hello {}></Hello>}/>
// //   </Routes>
// // </Router> */}
