"use client";
import { cityData, pageViewsData, rsvpData } from "@/data";
import React from "react";
import { Cell, Label, Pie, PieChart } from "recharts";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tooltip } from "@/components/ui/tooltip";

const rsvpConfig = {
  visitors: {
    label: "RSVPs",
  },
  value: {
    label: "Attendees",
    color: "var(--chart-1)",
  },
};
const pageViewsConfig = {
  visitors: {
    label: "Page Views",
  },
  value: {
    label: "views",
    color: "var(--chart-2)",
  },
};

const cityDataConfig = {
  value: {
    label: "Value",
  },
  "Greater Accra": {
    label: "Greater Accra",
    color: "var(--chart-1)",
  },
  Central: {
    label: "Central",
    color: "var(--chart-2)",
  },
  Volta: {
    label: "Volta",
    color: "var(--chart-3)",
  },
  Ashanti: {
    label: "Ashanti",
    color: "var(--chart-4)",
  },
  Eastern: {
    label: "Eastern",
    color: "var(--chart-5)",
  },
};

const DashboardCharts = () => {
  const totalValue = React.useMemo(() => {
    return cityData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Total RSVPs */}
      <div className="border p-4 bg-white">
        <h2 className="text-sm text-gray-500 mb-2">Total RSVPs</h2>
        <h1 className="text-2xl font-bold mb-6">401</h1>

        <Card className="pt-0 rounded-none shadow-none border-none">
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <ChartContainer
              config={rsvpConfig}
              className="aspect-auto h-[250px] w-full"
            >
              <AreaChart data={rsvpData}>
                <defs>
                  <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--chart-1)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--chart-1)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => value}
                      indicator="dot"
                    />
                  }
                />
                <Area
                  dataKey="value"
                  type="natural"
                  fill="url(#fillValue)"
                  stroke="var(--chart-1)"
                />
                <ChartLegend content={<ChartLegendContent />} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="border p-4 bg-white">
        <h2 className="text-sm text-gray-500 mb-2">Total Page Views</h2>
        <h1 className="text-2xl font-bold mb-6">41</h1>

        <Card className="pt-0 rounded-none shadow-none border-none">
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <ChartContainer
              config={pageViewsConfig}
              className="aspect-auto h-[250px] w-full"
            >
              <AreaChart data={pageViewsData}>
                <defs>
                  <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--chart-1)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--chart-1)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => value}
                      indicator="dot"
                    />
                  }
                />
                <Area
                  dataKey="value"
                  type="natural"
                  fill="url(#fillValue)"
                  stroke="var(--chart-1)"
                />
                <ChartLegend content={<ChartLegendContent />} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="border p-4 bg-white">
        <h2 className="text-sm text-gray-500 mb-2">Top Cities</h2>
        <Card className="flex flex-col pt-0 rounded-none shadow-none border-none">
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={cityDataConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={cityData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  {cityData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={cityDataConfig[entry.name].color}
                    />
                  ))}
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                             All Attendess
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {totalValue.toLocaleString()}
                            </tspan>
                            
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm ">
            <div className="p-4 pt-4 bg-gray-100 rounded-sm">
              <div className="grid grid-cols-2 gap-4">
                {cityData.map((city, index) => {
                  const percentage = (city.value / totalValue) * 100;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{
                          backgroundColor: cityDataConfig[city.name].color,
                        }}
                      ></div>
                      <span className="text-sm font-medium">{city.name}</span>
                      <span className="ml-auto text-sm text-gray-500">
                        {city.value} ({percentage.toFixed(0)}%)
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default DashboardCharts;
