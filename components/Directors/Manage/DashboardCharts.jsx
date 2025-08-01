"use client";
import { cityData, pageViewsData, rsvpData } from "@/data";
import React from "react";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
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

const DashboardCharts = () => {
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
    </div>
  );
};

export default DashboardCharts;
