import { getSites } from "@/api/site";
import React, { useEffect, useState } from "react";

const SiteList = () => {
  const [sites, setSites] = useState<any>([]);

  useEffect(() => {
    getSites()
      .then((res) => {
        setSites(res?.data?.siteData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {sites.map((site: any) => (
        <div key={site?.site?._id}>
          <h1 className="text-lg font-bold">{site?.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default SiteList;
