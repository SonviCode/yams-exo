import Skeleton from "react-loading-skeleton";

const GameSkeleton = () => {
  return (
    <>
      <div className="flex flex-col px-20 pt-10">
        <Skeleton width={500} />

        <Skeleton count={8} width={300} />
      </div>

      <div className="flex flex-col w-[200px] mx-auto mb-20">
        <Skeleton height={50} />
      </div>
      <div className="flex mx-auto mb-20">
        <Skeleton width={540} />
      </div>
    </>
  );
};

export default GameSkeleton;
