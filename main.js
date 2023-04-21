/*
  ---------------------------
  Основные данные и функции
  ---------------------------
*/

var
  paramsForm;

function handleFormSubmit(ev) {
  ev.preventDefault();
  document.getElementById('result').innerHTML = '';

  fetch('solver.php',{
    method: 'POST',
    body: serializeForm(ev.target)
  }).then(function(response) {
    if (response.ok) {
      return response.text();
    }
    return Promise.reject(response);
  }).then(function(data) {
    document.getElementById('result').innerHTML = data;
  }).catch(function(error) {
    alert('Что-то пошло не так.\rОшибка: ',error);
  });

  /*const
    frmData = $('#params-form').serialize();

  $.get(
    'solver.php',
    frmData,
    function(rez) {
      document.getElementById('x').innerHTML = rez;
    }
  );*/
}

function serializeForm(frmNode) {
  return new FormData(frmNode);
  /*const
    frmData=Array.from(frmNode.elements)
      .filter((it) => !!it.name)
      .map((el) => {
        const
          {name,value} = el;
          return {name,value}
      });
  console.log(frmData);*/
}
