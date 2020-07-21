const getColor = () => {
  let colors = ['#41fdfe', '#FF0000', '#FFC000', '#FFFC00', '#FF0000', '#00FFFF', '#FF0000', '#FF355E', '#FD5B78', '#FF6037', '#FF9966', '#FF9933', '#FFCC33', '#CCFF00', '#66FF66', '#AAF0D1', '#50BFE6', '#FF6EFF', '#FF3855', '#FD3A4A', '#FFAA1D', '#FFF700', '#299617', '#2243B6', '#5DADEC', '#FFEB00', '#AF6E4D', '#A83731', '#9C51B6', '#BFAFB2', '#FF5470', '#FFDB00', '#87FF2A', '#0048BA', '#00CC99', '#6CDAE7', '#0066FF', '#DB91EF', '#B2F302', '#FF5050', '#FC5A8D', '#14A989', '#ED0A3F', '#4BC7CF'];

    let value = Math.floor(Math.random()*(colors.length-1));

return colors[value];
}
const changeColor = () => {
  const randomColor = getColor();
   $('body').css({'background-color': randomColor});
  $('#quote-box').css({color: randomColor});
  $('button').css({'background-color': randomColor});
  $('#tweet-quote').css({'background-color': randomColor});

}

class Quotes extends React.Component {
  constructor(props){
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
    
  }
  handleClick(){
    setTimeout(() => {
    setQuote();
    const color = getColor();
  $("body").animate({ backgroundColor:color}, 1000);
  $('#quote-box').animate({ color:color}, 1000);
  $('button').animate({ backgroundColor:color}, 1000);
  $('#tweet-quote').animate({ backgroundColor:color}, 1000);
    }, 100);
  }
  render(){
    return(
    
  <div id="quote-box">
<div id="text">Random Quote Machine
        </div>
          <div id="author">- Clumsyknight
        </div><br />
        <div id="btns">
          <button id="new-quote" onClick={this.handleClick}>New Quote</button>
         <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank" title='Tweet this quote'><i className="fa fa-twitter"></i>
          </a>
        </div>
        </div>
    );
  }
}

ReactDOM.render(<Quotes/>, document.getElementById('app'))

const setQuote = () => {
   fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
   let value = Math.floor(Math.random() * (data.length) - 1);
$('#text').text(data[value].text)
$('#author').text('- '+data[value].author)
  });
    
}
changeColor();
setQuote();