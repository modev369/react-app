import MyImage from './assets/gamedashboard.jpg';
function Greeting() {
    return  <div>
        <h1>Testing Dev Environment</h1>
        <>
      <img src={MyImage} alt="Description of image" style={{ width: '100%', height: 'auto' }} />
      </>
        <svg>
          <circle cx="25" cy="75" r="20" stroke="green" stroke-width="2" />
        </svg>
        <form>
          <input type="text" />
        </form>
      </div>
      }

export default Greeting;