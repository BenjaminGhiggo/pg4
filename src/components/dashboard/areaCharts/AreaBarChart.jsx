import { useContext } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import {
    Bar,
    BarChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import { ThemeContext } from "../../../context/ThemeContext";
import "./AreaCharts.scss";

const data = [
  {
    month: "Jan",
    loss: 70,
    Aprobado: 100,
  },
  {
    month: "Feb",
    loss: 55,
    Aprobado: 85,
  },
  {
    month: "Mar",
    loss: 35,
    Aprobado: 90,
  },
  {
    month: "April",
    loss: 90,
    Aprobado: 70,
  },
  {
    month: "May",
    loss: 55,
    Aprobado: 80,
  },
  {
    month: "Jun",
    loss: 30,
    Aprobado: 50,
  },
  {
    month: "Jul",
    loss: 32,
    Aprobado: 75,
  },
  {
    month: "Aug",
    loss: 62,
    Aprobado: 86,
  },
  {
    month: "Sep",
    loss: 55,
    Aprobado: 78,
  },
];

const AreaBarChart = () => {
  const { theme } = useContext(ThemeContext);

  const formatTooltipValue = (value) => {
    return `${value}k`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}k`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">Notas en periodo de meses</h5>
        <div className="chart-info-data">
          <div className="info-data-value">60% media de aprobados</div>
          <div className="info-data-text">
            <FaArrowUpLong />
            <p>5% mas que el mes pasado</p>
          </div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#f6f6f6" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#f6f6f6" : "#f3f3f3"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="Aprobado"
              fill="#ffc034"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="loss"
              fill="#e3e7fc"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;
