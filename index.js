function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.substring(0, display.length - 1);
}

function calculate() {
    let display = document.getElementById("display").value;
    try {
        let result = eval(display);
        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}

function openModal(shape) {
    document.getElementById("overlay").style.display = 'block';
    document.getElementById("modal").style.display = 'block';

    let title = "";
    let content = "";

    switch (shape) {
        case 'triangle':
            title = "Area of Triangle";
            content = '<input type="number" id="base" placeholder="Base">' +
                        '<input type="number" id="height" placeholder="Height">' +
                        '<select id="unit">' +
                        '<option value="cm²">cm²</option>' +
                        '<option value="m²">m²</option>' +
                        '<option value="inch²">inch²</option>' +
                        '</select>';
            break;
        case 'circle':
            title = "Area of Circle";
            content = '<input type="number" id="radius" placeholder="Radius">' +
                        '<select id="unit">' +
                        '<option value="cm²">cm²</option>' +
                        '<option value="m²">m²</option>' +
                        '<option value="inch²">inch²</option>' +
                        '</select>';
            break;
        case 'rectangle':
            title = "Area of Rectangle";
            content = '<input type="number" id="width" placeholder="Width">' +
                        '<input type="number" id="height" placeholder="Height">' +
                        '<select id="unit">' +
                        '<option value="cm²">cm²</option>' +
                        '<option value="m²">m²</option>' +
                        '<option value="inch²">inch²</option>' +
                        '</select>';
            break;
        case 'square':
            title = "Area of Square";
            content = '<input type="number" id="side" placeholder="Side Length">' +
                        '<select id="unit">' +
                        '<option value="cm²">cm²</option>' +
                        '<option value="m²">m²</option>' +
                        '<option value="inch²">inch²</option>' +
                        '</select>';
            break;
        case 'cylinder':
            title = "Volume of Cylinder";
            content = '<input type="number" id="radius" placeholder="Radius">' +
                        '<input type="number" id="height" placeholder="Height">' +
                        '<select id="unit">' +
                        '<option value="cm³">cm³</option>' +
                        '<option value="m³">m³</option>' +
                        '<option value="inch³">inch³</option>' +
                        '</select>';
            break;
        case 'cone':
            title = "Volume of Cone";
            content = '<input type="number" id="radius" placeholder="Radius">' +
                        '<input type="number" id="height" placeholder="Height">' +
                        '<select id="unit">' +
                        '<option value="cm³">cm³</option>' +
                        '<option value="m³">m³</option>' +
                        '<option value="inch³">inch³</option>' +
                        '</select>';
            break;
        case 'sphere':
            title = "Volume of Sphere";
            content = '<input type="number" id="radius" placeholder="Radius">' +
                        '<select id="unit">' +
                        '<option value="cm³">cm³</option>' +
                        '<option value="m³">m³</option>' +
                        '<option value="inch³">inch³</option>' +
                        '</select>';
            break;
        case 'cube':
            title = "Volume of Cube";
            content = '<input type="number" id="side" placeholder="Side Length">' +
                        '<select id="unit">' +
                        '<option value="cm³">cm³</option>' +
                        '<option value="m³">m³</option>' +
                        '<option value="inch³">inch³</option>' +
                        '</select>';
            break;
        default:
            title = "Shape";
            content = "Unknown shape";
            break;
    }

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalContent").innerHTML = content;
    document.getElementById("modal").setAttribute("data-shape", shape);
}

function closeModal() {
    document.getElementById("overlay").style.display = 'none';
    document.getElementById("modal").style.display = 'none';
}

function calculateShape() {
    const shape = document.getElementById("modal").getAttribute("data-shape");
    let result = 0;
    const unit = document.getElementById("unit").value;

    switch (shape) {
        case 'triangle':
            const base = parseFloat(document.getElementById("base").value);
            const height = parseFloat(document.getElementById("height").value);
            result = 0.5 * base * height;
            break;
        case 'circle':
            const radius = parseFloat(document.getElementById("radius").value);
            result = Math.PI * Math.pow(radius, 2);
            break;
        case 'rectangle':
            const width = parseFloat(document.getElementById("width").value);
            const rectHeight = parseFloat(document.getElementById("height").value);
            result = width * rectHeight;
            break;
        case 'square':
            const side = parseFloat(document.getElementById("side").value);
            result = Math.pow(side, 2);
            break;
        case 'cylinder':
            const cylRadius = parseFloat(document.getElementById("radius").value);
            const cylHeight = parseFloat(document.getElementById("height").value);
            result = Math.PI * Math.pow(cylRadius, 2) * cylHeight;
            break;
        case 'cone':
            const coneRadius = parseFloat(document.getElementById("radius").value);
            const coneHeight = parseFloat(document.getElementById("height").value);
            result = (1/3) * Math.PI * Math.pow(coneRadius, 2) * coneHeight;
            break;
        case 'sphere':
            const sphereRadius = parseFloat(document.getElementById("radius").value);
            result = (4/3) * Math.PI * Math.pow(sphereRadius, 3);
            break;
        case 'cube':
            const cubeSide = parseFloat(document.getElementById("side").value);
            result = Math.pow(cubeSide, 3);
            break;
        default:
            result = "Error";
            break;
    }
    

    document.getElementById("display").value = `${result} ${unit}`;
    closeModal();
}