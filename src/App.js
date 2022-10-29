import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'./img/profile_img.jpg'} id="profile_img" className="profile_img" alt="profile_img" />
        <h3>
         Kevin Uzoma
        </h3>
        <div className='App-link-div'>
        <a id='twitter'
          className="App-link"
          href="https://twitter.com/ikechukwukev"
          target="_blank"
          rel="noopener noreferrer"
        >
         @ikechukwukev
        </a>
        </div>

        <div className='App-link-div'>
        <a id='btn_zuri'
          className="App-link"
          href="https://training.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zuri Team
        </a>
        </div>

        <div className='App-link-div'>
        <a id='books'
          className="App-link"
          href="https://books.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zuri Books
        </a>
        </div>

        <div className='App-link-div'>
        <a id='book_python'
          className="App-link"
          href="https://books.zuri.team/python-for-beginners?ref_id=%3Ckekesmovic%3E"
          target="_blank"
          rel="noopener noreferrer"
        >
          Python Books
        </a>
        </div>

        <div className='App-link-div'>
        <a id='pitch'
          className="App-link"
          href="https://background.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Background Check for Coders
        </a>
        </div>
        
        <div className='App-link-div'>
        <a id='book_design'
          className="App-link"
          href="https://books.zuri.team/design-rules"
          target="_blank"
          rel="noopener noreferrer"
        >
          Design Books
        </a>
        </div>
        <div className='App-link-div'>
        <a
          className="App-link"
          href="https://hng9.slack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         <img src={'./img/slack.svg'} id="profile_img" className="social_svg" alt="slack_svg" />
        </a>
        <a
          className="App-link"
          href="https://github.com/Ikechukwu11"
          target="_blank"
          rel="noopener noreferrer"
        >
         <img src={'./img/github.svg'} id="profile_img" className="social_svg" alt="github_svg" />
        </a>
        </div>
        
      </header>
    </div>
  );
}

export default App;
