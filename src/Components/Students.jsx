import data from "../DB/fakeDb.json";
import ClassStudents from "./ClassStudents";

export default function Students() {
  
  return (
    <div>
      <div className="max-w-[848px] mx-auto overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#FFFFFF0D]">
              <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                ID
              </th>
              <th className="p-5 text-sm md:text-xl font-semibold text-left">
                Name
              </th>
              <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
              <th className="p-5 text-sm md:text-xl font-semibold">
                Percentage
              </th>
            </tr>
          </thead>
            {/* <!-- class One --> */}
            <tbody>
            <ClassStudents students={data} group={"Class One"} />
            {/* <!-- class two --> */}
            <ClassStudents students={data} group={"Class Two"}/>
            {/* <!-- class three --> */}
            <ClassStudents students={data} group={"Class Three"}/>
          </tbody>
        </table>
      </div>
    </div>
  );
}
