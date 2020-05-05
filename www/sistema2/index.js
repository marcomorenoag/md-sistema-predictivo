$(document).ready( () => {
  
})

let btnResult = () =>{
  // Recopilación de valores de campos
  let v_id = $("#id").val();  
  let v_area = parseFloat($("#area").val()) || 0;
  let v_concavity = parseFloat($("#concavity").val()) || 0;
  let v_texture = parseFloat($("#texture").val()) || 0;
  let v_symmetry = parseFloat($("#symmetry").val()) || 0;
  let v_compactness = parseFloat($("#compactness").val()) || 0;
  let v_fractal_dimension = parseFloat($("#fractal_dimension").val()) || 0;

  // Insertar la ecuación y evaluar con las variables anteriores
  let prediction_value = 1 / (1 + Math.exp(-1*(19.85 - 0.288 * v_texture - 0.01 * v_area - 12.79 * v_compactness - 17.23 * v_concavity - 28.79 * v_symmetry + 31.80 * v_fractal_dimension)));

  // Dependiendo del resultado final, mostrar alguno de los siguientes mensajes
  if(prediction_value <= 0.5) {
    $("#diagnosis").html(`<h4>Diagnóstico para el registro con id: ${v_id}</h4><div class="alert alert-danger" role="alert">El tipo de cáncer es maligno.<br>Puntuación: ${prediction_value}</div><h5>El pronóstico anterior tiene una confiabilidad del 89.03%</h5><br><h6>Consulte a su médico para más información</h6>`);
    //$("#diagnosis").html(`<h4>Diagnóstico para el registro con id: ${v_id}</h4><div class="alert alert-danger" role="alert">El tipo de cáncer es maligno.</div><h5>El pronóstico anterior tiene una confiabilidad del 89.03%</h5><br><h6>Consulte a su médico para más información</h6>`);
  } else {
    $("#diagnosis").html(`<h4>Diagnóstico para el registro con id: ${v_id}</h4><div class="alert alert-success" role="alert">El tipo de cáncer es benigno.<br>Puntuación: ${prediction_value}</div><h5>El pronóstico anterior tiene una confiabilidad del 89.03%</h5><br><h6>Consulte a su médico para más información</h6>`);
    //$("#diagnosis").html(`<h4>Diagnóstico para el registro con id: ${v_id}</h4><div class="alert alert-success" role="alert">El tipo de cáncer es benigno.</div><h5>El pronóstico anterior tiene una confiabilidad del 89.03%</h5><br><h6>Consulte a su médico para más información</h6>`);
  }
}