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
    <div className="w-full bg-[#ededed] rounded-lg mt-5">
      <Sidebar aria-label="Default sidebar example" className="w-full">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser} label="70%" labelColor="dark">
              Profile
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox} label="3">
              Feeds
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              My Post
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Save Post
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default CommunityMenu;
