import data from "../DB/fakeDb.json";
import ClassStudents from "./ClassStudents";

export default function Students() {
  const classOneStudents = data?.filter(
    (student) => student.class === "Class One"
  );
  const classTwoStudents = data?.filter(
    (student) => student.class === "Class Two"
  );

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
            <ClassStudents classStudents={classOneStudents} />
            <tbody>
            {/* <!-- class two --> */}
            <ClassStudents classStudents={classTwoStudents} />
           
          </tbody>
        </table>
      </div>
    </div>
  );
}
