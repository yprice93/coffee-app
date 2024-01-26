import { useState } from "react";
import { useMapContext } from "../context/MyContext";
import Pagination from "./Pagination";

export default function CafeList() {
  const { cafes } = useMapContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = cafes.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(cafes.length / recordsPerPage);

  return (
    <div className="cafelist-parent grid grid-rows-4">
      {currentRecords.length > 0 &&
        currentRecords.map((cafe) => <div>{cafe.displayName.text}</div>)}
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
