import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import './App.css';

import { InboxOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
// import React from 'react';

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: '/Users/zhangchao/Downloads',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

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

const Hello = () => {
  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">TEST</p>
        <p className="ant-upload-hint">TEST</p>
      </Dragger>
      <h1>electron-react-boilerplate</h1>

      {/* <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div> */}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
