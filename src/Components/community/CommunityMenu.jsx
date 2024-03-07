"use client";
import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

const CommunityMenu = () => {
  return (
    <div className="w-full rounded-lg mt-5 shadow-xl">
      <Sidebar aria-label="Default sidebar example" className="w-full  ">
        <Sidebar.Items className="bg-white">
          <Sidebar.ItemGroup className="">
            <Sidebar.Item href="/dashboardlayout" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/dashboardlayout/my-profile" icon={HiUser} label="70%" labelColor="dark">
              Profile
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox} label="3">
              Feeds
            </Sidebar.Item>
            <Sidebar.Item href="/community/mypost" icon={HiViewBoards}>
              My Post
            </Sidebar.Item>
            {/* <Sidebar.Item href="#" icon={HiShoppingBag}>
              Save Post
            </Sidebar.Item> */}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default CommunityMenu;
