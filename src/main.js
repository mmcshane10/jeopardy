import './styles.css';

$(document).ready(function() {
  $('#begin-jeopardy').click(function() {

    $('.jeopardy-answer').hide();

    let request = new XMLHttpRequest();
    const url = 'http:/jservice.io/api/random';

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      $('.jeopardy-question').text(`Question: ${response[0].question}`);
      $('.jeopardy-answer').text(`Answer: What is ${response[0].answer}?`);
    };

    let id = setTimeout(function(){
      $('.jeopardy-answer').show();
      clearInterval(id);
      }, 5000);

  });
});
