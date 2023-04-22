import {useEffect} from 'react'
import { createChart } from 'lightweight-charts'

const Chart = ({precios}) => {
      // const precios = [
      //   "33.41",
      //   "34.82",
      //   "36.02",
      //   "31.32",
      //   "10.62",
      //   "37.92",
      //   "29.12",
      //   "40.02",
      //   "27.52",
      //   "30.72",
      //   "35.62",
      //   "32.02",

      //   "33.41",
      //   "20.82",
      //   "36.02",
      //   "15.32",
      //   "17.62",
      //   "17.92",
      //   "19.12",
      //   "10.02",
      //   "12.52",
      //   "13.72",
      //   "6.62",
      //   "15.42",
      // ]

      var fechaActual = new Date();
      // Crear un arreglo para almacenar las fechas y horas
      var fechasHoras = [];
      // Generar fechas y horas para las últimas 24 horas
      for (var i = 23; i >= 0; i--) {
        // Restar i horas a la fecha actual
        var fechaHora = new Date(fechaActual - i * 3600000).getTime(); // 3600000 milisegundos en una hora
      
        // Agregar la fecha y hora al arreglo
        fechasHoras.push(fechaHora);
      }

      useEffect(() => {
        // const chart = createChart(document.getElementById('chart'), { width: window.screen.width * .9, height: 600 });
        const chart = createChart(document.getElementById('chart'));
        const baselineSeries = chart.addBaselineSeries({ baseValue: { type: 'price', price: 25 }, topLineColor: 'rgba( 38, 120, 254, 1)', topFillColor1: 'rgba( 38, 120, 254, 0.0)', topFillColor2: 'rgba( 38, 120, 254, 0.0)', bottomLineColor: 'rgba( 250, 50, 0, 1)', bottomFillColor1: 'rgba( 239, 83, 80, 0.25)', bottomFillColor2: 'rgba( 239, 83, 80, 0.9)' });

        const data = [];
        for (var i = 0; i <= 23; i++) {
            data.push({value: parseFloat(precios[i]), time: fechasHoras[i]})
        }

        baselineSeries.setData(data);
        chart.timeScale().fitContent();
          
    }, []);
  
    return <div id="chart">

    </div>;
  };
  
  export default Chart;