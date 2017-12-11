import { PureComponent } from 'react'
import ReactDOM from 'react-dom'

class BoardPortal extends PureComponent {
  constructor (props) {
    super(props)
    // STEP 1: create a container <div>
    this.containerEl = document.createElement('div')
    this.externalWindow = null
  }

  render () {
    // STEP 2: append props.children to the container <div> that isn't mounted anywhere yet
    return ReactDOM.createPortal(this.props.children, this.containerEl)
  }

  componentDidMount () {
    // STEP 3: open a new browser window and store a reference to it
    this.externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200')

    const special_font = document.createElement("style");
    special_font.type = "text/css";
    special_font.innerHTML = `
    @font-face {
      font-family:"Familiada Regular";
      src: url("http://localhost:3000/static/media/familiada.woff") format("woff");
      font-weight:normal;
      font-style:normal;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: "Familiada Regular";
    }
    `;
    this.externalWindow.document.getElementsByTagName('head')[0].appendChild(special_font);
    // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
    this.externalWindow.document.body.innerHTML = ''
    this.externalWindow.document.body.appendChild(this.containerEl)

  }

  componentWillUnmount () {
    // STEP 5: This will fire when this.state.showWindowPortal in the parent component becomes false
    // So we tidy up by closing the window
    this.externalWindow.close()
  }
}

export default BoardPortal