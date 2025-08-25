"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkyWidget() {
  const today = new Date()
  const weekDays = []

  for (let i = 0; i < 7; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    weekDays.push({
      day: date.toLocaleDateString("it-IT", { weekday: "short" }),
      date: date.getDate(),
      isToday: i === 0,
    })
  }

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>🌙</span>
          Oggi in Cielo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Moon Phase */}
        <div className="text-center space-y-2">
          <div className="text-4xl">🌓</div>
          <p className="font-medium">Primo Quarto</p>
          <p className="text-sm text-muted-foreground">Luna in Scorpione</p>
        </div>

        {/* Highlights */}
        <div className="space-y-3">
          <h4 className="font-medium">Highlights Cosmici</h4>
          <div className="space-y-2">
            <Badge variant="outline" className="w-full justify-start">
              ⚡ Mercurio in moto diretto
            </Badge>
            <Badge variant="outline" className="w-full justify-start">
              🔥 Marte in Ariete
            </Badge>
          </div>
        </div>

        {/* Mini Calendar */}
        <div className="space-y-3">
          <h4 className="font-medium">Questa Settimana</h4>
          <div className="grid grid-cols-7 gap-1">
            {weekDays.map((day, index) => (
              <div
                key={index}
                className={`text-center p-2 rounded text-xs ${
                  day.isToday ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                <div className="font-medium">{day.day}</div>
                <div>{day.date}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
