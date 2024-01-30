import { useState } from "react";
import { useMapContext } from "../context/MyContext";
import Pagination from "./Pagination";
import CafeItem from "./CafeItem";
import Loading from "./Loading";

export default function CafeList() {
  const { isLoading, cafes } = useMapContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = cafes.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(cafes.length / recordsPerPage);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="cafelist-parent grid grid-rows-4">
          {currentRecords.length > 0 &&
            currentRecords.map((cafe) => <CafeItem cafe={cafe} />)}
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </>
  );
}
