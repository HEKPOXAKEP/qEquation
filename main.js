/*
  ==================================
  Основные данные и функции
  (c) 2023 LAGODROM Solutions Ltd.
  ==================================
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
}

function serializeForm(frmNode) {
  return new FormData(frmNode);
}
