import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function HoroscopeSkeleton() {
  return (
    <div className="space-y-8">
      {/* Tabs Skeleton */}
      <div className="flex gap-2 p-1 glass rounded-lg">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-10 w-20 bg-muted/20 rounded-md animate-pulse" />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Main Card Skeleton */}
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-muted/20 rounded-full animate-pulse" />
                <div className="space-y-2">
                  <div className="h-6 w-48 bg-muted/20 rounded animate-pulse" />
                  <div className="h-4 w-32 bg-muted/20 rounded animate-pulse" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="h-4 w-full bg-muted/20 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-muted/20 rounded animate-pulse" />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-3">
                    <div className="h-5 w-24 bg-muted/20 rounded animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-muted/20 rounded animate-pulse" />
                      <div className="h-3 w-2/3 bg-muted/20 rounded animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Compatibility Panel Skeleton */}
          <Card className="glass-card">
            <CardHeader>
              <div className="h-6 w-40 bg-muted/20 rounded animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-muted/20 rounded animate-pulse" />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          {/* Sky Widget Skeleton */}
          <Card className="glass-card">
            <CardHeader>
              <div className="h-6 w-32 bg-muted/20 rounded animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="h-40 bg-muted/20 rounded animate-pulse" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
