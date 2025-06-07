// FormModal.jsx
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import ListMembers from "../ListMembers";
import Form from "./Form";
import { HeadlineStyle } from "../styled_component/HeadlineStyle";
import { ButtonStyle } from "../styled_component/ButtonStyle";
import ImgHolder from "../ImgHolder";

export default function FormModal() {
  /* ------------------ tab state ------------------ */
  const [isVisible, setIsVisible] = useState({ mentor: true, artist: false });

  /* ------------------ phone / error state ------------------ */
  const [mentorPhone, setMentorPhone] = useState("");
  const [artistPhone, setArtistPhone] = useState("");
  const [mentorErr, setMentorErr] = useState("");
  const [artistErr, setArtistErr] = useState("");

  const isValidPhone = (val) => /^\d{11}$/.test(val);

  /* -------- clear the *other* error when tab switches -------- */
  useEffect(() => {
    if (isVisible.mentor) setArtistErr("");
    if (isVisible.artist) setMentorErr("");
  }, [isVisible]);

  /* ---------------- mentor handlers ---------------- */
  const handleMentorChange = (e) => setMentorPhone(e.target.value);

  const submitMentor = () => {
    if (isValidPhone(mentorPhone)) {
      setMentorErr("");
      console.log("Mentor phone ✅:", mentorPhone);
      // TODO: proceed (API call, close modal, etc.)
    } else {
      setMentorErr("باید 11 شماره داشته باشد");
    }
  };

  const handleMentorKey = (e) => e.key === "Enter" && submitMentor();

  /* ---------------- artist handlers ---------------- */
  const handleArtistChange = (e) => setArtistPhone(e.target.value);

  const submitArtist = () => {
    if (isValidPhone(artistPhone)) {
      setArtistErr("");
      console.log("Artist phone ✅:", artistPhone);
      // TODO: proceed (API call, close modal, etc.)
    } else {
      setArtistErr("باید 11 شماره داشته باشد");
    }
  };

  const handleArtistKey = (e) => e.key === "Enter" && submitArtist();

  /* ---------------- nav data ---------------- */
  const navData = [
    {
      name: "مدرس یا منتور",
      handler: () => setIsVisible({ mentor: true, artist: false }),
    },
    {
      name: "هنرجو",
      handler: () => setIsVisible({ mentor: false, artist: true }),
    },
  ];

  /* ---------------- JSX ---------------- */
  return (
    <Modal
      OpenerTxt="ورود به حساب"
      modalClass="flex flex-col lg:gap-[30px] items-center bg-[#F7F8F9] w-[350px]"
    >
      <HeadlineStyle className="text-[24px]">ورود به نمکدان</HeadlineStyle>

      {/* Tabs */}
      <div className="w-full flex flex-col lg:gap-[20px]">
        <ul className="w-full flex gap-[30px] border-b-[3px] border-[#D9D9D9] pb-[8px]">
          <ListMembers navItems={navData} className="font-medium" />
        </ul>

        {/* ---------- mentor ---------- */}
        {isVisible.mentor && (
          <>
            <Form
              headline="شماره تلفن"
              htmlFor="mentorPhone"
              type="tel"
              placeholder="شماره تلفن خود را وارد نمایید"
              invalidMassage={mentorErr}
              value={mentorPhone}
              onChange={handleMentorChange}
              onKeyDown={handleMentorKey}
            />

            <div className="w-full flex items-center flex-col gap-[20px]">
              <ButtonStyle
                className="w-full !text-[16px]"
                onClick={submitMentor}
              >
                ورود
              </ButtonStyle>

              <span className="text-[14px] text-[#000]">یا</span>

              <ButtonStyle className="w-full !bg-[#444444] !text-[16px] font-black flex gap-[5px]">
                <span>google</span>
                <ImgHolder
                  imgAddress="img/googleIcon.png"
                  imgSize="w-[24px]"
                  className="relative top-[3px]"
                  imgAlt="Entering with Google Account"
                />
              </ButtonStyle>
            </div>
          </>
        )}

        {/* ---------- artist ---------- */}
        {isVisible.artist && (
          <>
            <Form
              headline="شماره تلفن"
              htmlFor="artistPhone"
              type="tel"
              placeholder="شماره تلفن خود را وارد نمایید"
              invalidMassage={artistErr}
              value={artistPhone}
              onChange={handleArtistChange}
              onKeyDown={handleArtistKey}
            />

            <div className="w-full flex items-center flex-col gap-[20px]">
              <ButtonStyle
                className="w-full !text-[16px]"
                onClick={submitArtist}
              >
                ورود
              </ButtonStyle>

              <span className="text-[14px] text-[#000]">یا</span>

              <ButtonStyle className="w-full !bg-[#444444] !text-[16px] font-black flex gap-[5px]">
                <span>google</span>
                <ImgHolder
                  imgAddress="img/googleIcon.png"
                  imgSize="w-[24px]"
                  className="relative top-[3px]"
                  imgAlt="Entering with Google Account"
                />
              </ButtonStyle>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
