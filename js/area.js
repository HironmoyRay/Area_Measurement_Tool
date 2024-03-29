// Area of Triangle
document.getElementById("triangle-btn").addEventListener("click", function () {
  const base = getInputFieldValue("triangle-base");
  const height = getInputFieldValue("triangle-height");
  const area = 0.5 * base * height;
  if (isNaN(area)) {
    return alert("Please Enter Valid Input");
  }
  const areaFixed = area.toFixed(2);
  setAreaValue("triangle-area", areaFixed);

  const title = getTitle("triangle-title");
//   console.log(title);
  setReference(areaFixed, title);
});

// Area of Rectangle
document
  .getElementById("rectangular-btn")
  .addEventListener("click", function () {
    const width = getInputFieldValue("rectangle-width");
    const length = getInputFieldValue("rectangle-length");
    const area = width * length;
    if (isNaN(area)) {
      return alert("Please Enter Valid Input");
    }
    const areaFixed = area.toFixed(2);
    setAreaValue("rectangle-area", areaFixed);

    const title = getTitle("rectangle-title");
    // console.log(title);
    setReference(areaFixed, title);
  });

// Area of Parallelogram
document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const base = getInputFieldValue("parallelogram-base");
    const height = getInputFieldValue("parallelogram-height");
    const area = base * height;
    if (isNaN(area)) {
      return alert("Please Enter Valid Input");
    }
    const areaFixed = area.toFixed(2);
    setAreaValue("parallelogram-area", areaFixed);

    const title = getTitle("parallelogram-title");
    // console.log(title);
    setReference(areaFixed, title);
  });

// Area of Rhombus
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const diagonal1 = getInputFieldValue("rhombus-diagonal1");
  const diagonal2 = getInputFieldValue("rhombus-diagonal2");
  const area = 0.5 * diagonal1 * diagonal2;
  if (isNaN(area)) {
    return alert("Please Enter Valid Input");
  }
  const areaFixed = area.toFixed(2);
  setAreaValue("rhombus-area", areaFixed);

  const title = getTitle("rhombus-title");
//   console.log(title);
  setReference(areaFixed, title);
});

//   Area of Pentagon
document.getElementById("pentagon-btn").addEventListener("click", function () {
  const perimeter = getInputFieldValue("pentagon-perimeter");
  const apothem = getInputFieldValue("pentagon-apothem");
  const area = 0.5 * perimeter * apothem;
  if (isNaN(area)) {
    return alert("Please Enter Valid Input");
  }
  const areaFixed = area.toFixed(2);
  setAreaValue("pentagon-area", areaFixed);

  const title = getTitle("pentagon-title");
//   console.log(title);
  setReference(areaFixed, title);
});
//   Area of Ellipse
document.getElementById("ellipse-btn").addEventListener("click", function () {
  const radius1 = getInputFieldValue("radius1");
  const radius2 = getInputFieldValue("radius2");
  const area = Math.PI * radius1 * radius2;
  if (isNaN(area)) {
    return alert("Please Enter Valid Input");
  }
  const areaFixed = area.toFixed(2);
  setAreaValue("ellipse-area", areaFixed);

  const title = getTitle("ellipse-title");
//   console.log(title);
  setReference(areaFixed, title);
});
