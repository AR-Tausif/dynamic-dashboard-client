import { CSInfoOutlineRounded } from "@/icons/cs-info-outline-rounded";
import { Card, CardContent, CardDescription } from "../ui/card";
import { CSBarChart } from "@/icons/cs-bar-chart";
import { cn } from "@/lib/utils";

export const StatusCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("pt-4", className)}>
      <CardContent>
        {/* card head section */}
        <div className="flex justify-between items-center">
          <div className="">
            <CardDescription className="flex gap-2 items-center">
              Product Overview <CSInfoOutlineRounded />{" "}
            </CardDescription>
            <div className="pt-2">
              <p>
                <span className="text-3xl font-bold">$43,630</span>
                <span className="text-sm"> Total sales</span>
              </p>
            </div>
          </div>

          <div className="">
            <CSBarChart width={40} height={40} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
