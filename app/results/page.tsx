import { racesDataFake } from "@/fakeData";
import { getData } from "@/utils/apiHelper";
import React from "react";

export default async function page() {
  // const resultsPageData = await getData(
  //   "/races/2023?field=races&location=all"
  // );

  // console.log(resultsPageData);
  const renderTableHead = (headData: Array<any>) => {
    const htmlRender = [];
    for (const key in headData[0]) {
      console.log(headData[0]);
      htmlRender.push(<th>{headData[0][key]}</th>);
    }
    return htmlRender;
  };

  const renderTableBody = (bodyData: Array<any>) => {
    return bodyData.map((item, idx) => {
      return <tr key={idx}></tr>;
    });
  };

  return (
    <div className="container">
      <h1 className="uppercase text-5xl font-bold tracking-widest">
        2023 race result
      </h1>
      <div className="data-table">
        <table className="table-auto">
          <thead>
            <tr>{renderTableHead(racesDataFake.head)}</tr>
          </thead>
          <tbody>{renderTableBody(racesDataFake.body)}</tbody>
        </table>
      </div>
    </div>
  );
}
