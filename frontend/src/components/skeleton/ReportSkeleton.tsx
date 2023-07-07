import Skeleton from "react-loading-skeleton";

const ReportSkeleton = () => {
  return Array(4)
    .fill(0)
    .map((_item: number, i: React.Key) => (
      <div
        key={i}
        className="border rounded p-5 flex pl-20 gap-24 shadow-md text-left"
      >
        <div className="w-[180px]">
          <h3>
            <Skeleton />
          </h3>
          <p className="italic">
            <Skeleton />
          </p>
        </div>
        <div className="w-[400px]">
          <Skeleton count={2} />
        </div>
      </div>
    ));
};

export default ReportSkeleton;
