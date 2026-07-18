import axios from "axios";
import { useEffect, useState } from "react";
import useLightStore from "../../stores/useLightStore";
import CargoTablesRows from "./CargoTablesRows";
import useCargoStore from "../../stores/useCargoStore";

const CargoTable = () => {
  const [cargoData2, setCargoData2] = useState([
    {
      id: 1,
      title: "بار سیمان به مشهد",
      origin: "باسمنج",
      destination: "بخشایش",
      vehicle: "خاور اتاق چوبی روباز",
      tonnage: "تناژ آزاد",
      price: "500,000 تومان",
    },
    {
      id: 2,
      title: "بار گندم به تبریز",
      origin: "اهر",
      destination: "مراغه",
      vehicle: "نیسان",
      tonnage: "3 تن",
      price: "350,000 تومان",
    },
  ]);

  const filteredCargoData = useCargoStore((state) => state.filteredCargoData);

  const cargoes = filteredCargoData();

  const [isError, setIsError] = useState("");

  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://api.barmax.ir/api/v2/cargos", {
        headers: {
          Authorization: "sanctum",
        },
      })
      .then((res) => {
        console.log(res.data);
        setCargoData2(res.data);
      })
      .catch((err) => {
        console.log(err.response?.data);
        setIsError(err.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const { light } = useLightStore();

  return (
    <>
      <table className="w-full text-[14px] border-separate border-spacing-y-4">
        <thead className="w-full  text-[#6e7178]">
          <tr className="w-full ">
            <td
              className={`text-center pt-4 pb-4 ${
                light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
              } rounded-tr-full rounded-br-full`}
            >
              عنوان
            </td>
            <td
              className={`text-center pt-4 pb-4 ${
                light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
              }`}
            >
              مبدا
            </td>
            <td
              className={`text-center pt-4 pb-4 ${
                light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
              }`}
            >
              مقصد
            </td>
            <td
              className={`text-center pt-4 pb-4 ${
                light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
              }`}
            >
              ناوگان
            </td>
            <td
              className={`text-center pt-4 pb-4 ${
                light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
              }`}
            >
              تناژ
            </td>
            <td
              className={`text-center pt-4 pb-4 ${
                light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
              }`}
            >
              قیمت
            </td>
            <td
              className={`text-center pt-4 pb-4 ${
                light ? "bg-[#f9fafc]" : "bg-[#0e1b2b]"
              } text-[#f9fafc] rounded-tl-full rounded-bl-full`}
            ></td>
          </tr>
        </thead>
        <tbody className="w-full ">
          <CargoTablesRows cargoData={cargoes} />
        </tbody>
      </table>
      {isError && <span>{isError}</span>}
    </>
  );
};

export default CargoTable;
