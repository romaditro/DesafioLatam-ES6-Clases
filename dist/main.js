"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Clientes = /*#__PURE__*/function () {
  // #nombre = "";
  // #impuesto = {};
  //const PORCENTAJE = 0.21;
  function Clientes(nombre) {
    var impuesto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Clientes);

    this.nombre = nombre;
    this.impuesto = impuesto;
  }

  _createClass(Clientes, [{
    key: "getNombre",
    get: function get() {
      return this.nombre;
    }
  }, {
    key: "setNombre",
    set: function set(valor) {
      this.nombre = valor;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto(monto_bruto_anual, deducciones) {
      var PORCENTAJE = 0.21;
      var impuesto = (monto_bruto_anual - deducciones) * PORCENTAJE;
      return impuesto;
    }
  }]);

  return Clientes;
}();

var Impuestos = /*#__PURE__*/function () {
  function Impuestos(montoBruto, deducciones) {
    _classCallCheck(this, Impuestos);

    this.montoBruto = montoBruto;
    this.deducciones = deducciones;
  } //MontoBruto


  _createClass(Impuestos, [{
    key: "getMontoBruto",
    get: function get() {
      return this.montoBruto;
    }
  }, {
    key: "setMontoBruto",
    set: function set(valor) {
      this.montoBruto = valor;
    } //Deducciones.

  }, {
    key: "getDeducciones",
    get: function get() {
      return this.deducciones;
    }
  }, {
    key: "setDeducciones",
    set: function set(valor) {
      this.deducciones = valor;
    }
  }]);

  return Impuestos;
}();

var boton = document.getElementById("calcular");
var inputNombre = document.getElementById("nombre");
var inputMontoBrutoAnual = document.getElementById("montoBrutoAnual");
var inputDeducciones = document.getElementById("deducciones");
var divResultado = document.getElementById("resultado");
boton.addEventListener("click", function () {
  var nombre = inputNombre.value;
  var montoBrutoAnual = Number(inputMontoBrutoAnual.value);
  var deducciones = Number(inputDeducciones.value);
  var cliente = new Clientes(nombre);
  var impuesto = new Impuestos(montoBrutoAnual, deducciones);
  var impuestoCalculado = cliente.calcularImpuesto(impuesto.getMontoBruto, impuesto.getDeducciones);
  divResultado.style.display = "block";
  divResultado.innerHTML = "<h2>".concat(nombre, " t\xFA impuesto anual a pagar es de ").concat(impuestoCalculado, "</h2>");
});