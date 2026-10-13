
import {
  Activity,
  AlertTriangle,
  Database,
  Server,
} from "lucide-react";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const metrics = [
  { time: "14:22", cpu: 20, memory: 50 },
  { time: "14:23", cpu: 26, memory: 47 },
  { time: "14:24", cpu: 21, memory: 50 },
  { time: "14:25", cpu: 23, memory: 55 },
  { time: "14:26", cpu: 32, memory: 66 },
  { time: "14:27", cpu: 26, memory: 56 },
  { time: "14:28", cpu: 21, memory: 52 },
  { time: "14:29", cpu: 24, memory: 60 },
  { time: "14:30", cpu: 23, memory: 57 },
  { time: "14:31", cpu: 31, memory: 66 },
  { time: "14:32", cpu: 23, memory: 57 },
];

const cards = [
  {
    title: "Agents",
    value: "12",
    icon: Server,
    text: "registered agents",
  },
  {
    title: "Live CPU",
    value: "55%",
    icon: Activity,
    text: "average usage",
  },
  {
    title: "Storage",
    value: "3",
    icon: Database,
    text: "MongoDB / SQLite / JSON",
  },
  {
    title: "Alerts",
    value: "4",
    icon: AlertTriangle,
    text: "needs attention",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/80 px-6 py-5">
        <h1 className="text-2xl font-bold">
          Agent Metrics Dashboard
        </h1>

        <p className="text-sm text-slate-400">
          React frontend + Go monolith backend + agent metrics collector
        </p>
      </header>

      <main className="p-6">
        {/* Summary Cards */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-slate-400">
                    {card.title}
                  </p>

                  <Icon
                    className="text-cyan-300"
                    size={22}
                  />
                </div>

                <h2 className="mt-4 text-3xl font-bold">
                  {card.value}
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  {card.text}
                </p>
              </div>
            );
          })}
        </section>

        {/* Chart and Backend Plan */}
        <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Live Metrics Chart */}
          <div className="rounded-2xl border border-emerald-400 bg-[#0b1b35] p-5 shadow-[0_0_8px_rgba(16,185,129,0.15)] lg:col-span-2">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="flex items-center gap-3 text-lg font-semibold text-slate-100">
                <Activity
                  size={20}
                  className="text-blue-200"
                />
                Live Metrics
              </h2>

              <div className="flex items-center gap-4 text-xs text-slate-200">
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                  CPU Usage
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-purple-500" />
                  Memory Usage
                </span>
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={metrics}
                  margin={{
                    top: 5,
                    right: 5,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid
                    stroke="#193253"
                    strokeDasharray="2 2"
                    vertical
                  />

                  <XAxis
                    dataKey="time"
                    stroke="#94a3b8"
                    tick={{
                      fill: "#d0def2",
                      fontSize: 11,
                    }}
                    tickLine={false}
                    axisLine={{
                      stroke: "#25466d",
                    }}
                  />

                  <YAxis
                    domain={[0, 100]}
                    ticks={[0, 20, 40, 60, 80, 100]}
                    tickFormatter={(value) => `${value}%`}
                    stroke="#94a3b8"
                    tick={{
                      fill: "#d0def2",
                      fontSize: 11,
                    }}
                    tickLine={false}
                    axisLine={false}
                    width={38}
                  />

                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0b1b35",
                      border: "1px solid #29466b",
                      borderRadius: "8px",
                      color: "#ffffff",
                    }}
                    labelStyle={{
                      color: "#dbeafe",
                    }}
                    formatter={(value, name) => [
                      `${value}%`,
                      name === "cpu"
                        ? "CPU Usage"
                        : "Memory Usage",
                    ]}
                  />

                  <Line
                    type="monotone"
                    dataKey="cpu"
                    name="cpu"
                    stroke="#22b8ff"
                    strokeWidth={2.5}
                    dot={{
                      r: 3,
                      fill: "#22b8ff",
                      strokeWidth: 0,
                    }}
                    activeDot={{ r: 5 }}
                    isAnimationActive={false}
                  />

                  <Line
                    type="monotone"
                    dataKey="memory"
                    name="memory"
                    stroke="#b44cff"
                    strokeWidth={2.5}
                    dot={{
                      r: 3,
                      fill: "#b44cff",
                      strokeWidth: 0,
                    }}
                    activeDot={{ r: 5 }}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Backend Plan */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="mb-4 text-xl font-semibold">
              Backend Plan
            </h2>

            <ul className="space-y-3 text-sm text-slate-300">
              <li>✅ Go monolith API</li>
              <li>✅ Agent register API</li>
              <li>✅ Metrics receive API</li>
              <li>✅ MongoDB for agents</li>
              <li>✅ SQLite for users</li>
              <li>✅ Heavy JSON/NDJSON store</li>
              <li>✅ SSE/WebSocket live alerts</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
