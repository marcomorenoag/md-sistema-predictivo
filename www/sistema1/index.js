$(document).ready( () => {
  
})

let btnResult = () =>{
  // Recopilación de valores de campos
  let v_id = $("#id").val();
  let v_radius = parseFloat($("#radius").val()) || 0;
  let v_texture = parseFloat($("#texture").val()) || 0;
  let v_perimeter = parseFloat($("#perimeter").val()) || 0;
  let v_area = parseFloat($("#area").val()) || 0;
  let v_smoothness = parseFloat($("#smoothness").val()) || 0;
  let v_compactness = parseFloat($("#compactness").val()) || 0;
  let v_concavity = parseFloat($("#concavity").val()) || 0;
  let v_concave_points = parseFloat($("#concave_points").val()) || 0;
  let v_symmetry = parseFloat($("#symmetry").val()) || 0;
  let v_fractal_dimension = parseFloat($("#fractal_dimension").val()) || 0;
  //alert(`ID type: ${v_id}`);
  //alert(`Radius type: ${v_radius}`);

  // Insertar la ecuación y evaluar con las variables anteriores
  let prediction_value = 1 / (1 + Math.exp(-1*(7.36 + 2.05 * v_radius - 0.38 * v_texture + 0.07 * v_perimeter - 0.04 * v_area - 76.43 * v_smoothness + 1.46 * v_compactness - 8.47 * v_concavity - 66.82 * v_concave_points - 16.28 * v_symmetry + 68.38 * v_fractal_dimension)));

  // Dependiendo del resultado final, mostrar alguno de los siguientes mensajes
  if(prediction_value <= 0.5) {
    $("#diagnosis").html(`<h4>Diagnóstico para el registro con id: ${v_id}</h4><div class="alert alert-danger" role="alert">El tipo de cáncer es maligno.<br>Puntuación: ${prediction_value}</div><h5>El pronóstico anterior tiene una confiabilidad del 91.28%</h5><br><h6>Consulte a su médico para más información</h6>`);
    //$("#diagnosis").html(`<h4>Diagnóstico para el registro con id: ${v_id}</h4><div class="alert alert-danger" role="alert">El tipo de cáncer es maligno.</div><h5>El pronóstico anterior tiene una confiabilidad del 91.28%</h5><br><h6>Consulte a su médico para más información</h6>`);
  } else {
    $("#diagnosis").html(`<h4>Diagnóstico para el registro con id: ${v_id}</h4><div class="alert alert-success" role="alert">El tipo de cáncer es benigno.<br>Puntuación: ${prediction_value}</div><h5>El pronóstico anterior tiene una confiabilidad del 91.28%</h5><br><h6>Consulte a su médico para más información</h6>`);
    //$("#diagnosis").html(`<h4>Diagnóstico para el registro con id: ${v_id}</h4><div class="alert alert-success" role="alert">El tipo de cáncer es benigno.</div><h5>El pronóstico anterior tiene una confiabilidad del 91.28%</h5><br><h6>Consulte a su médico para más información</h6>`);
  }
}