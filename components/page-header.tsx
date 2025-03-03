"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import React from "react";

export const PageHeaderTitle = ({
  children,
  className,
}: {
  children: string;
  className?: string;
  displayName: string;
}) => {
  return <h1 className={"text-[44px] font-bold " + className}>{children}</h1>;
};

export const PageHeaderText = ({
  children,
  className,
}: {
  children: string;
  className?: string;
  displayName: string;
}) => {
  return <p className={"my-4 " + className}>{children}</p>;
};

export const PageHeaderActionButton = ({
  children,
  className,
}: {
  children: string;
  className?: string;
  displayName: string;
}) => {
  return (
    <Button className={"rounded-full w-fit my-8 " + className}>
      {children}
    </Button>
  );
};

export const PageHeaderImage = ({
  url,
  alt,
  className,
}: {
  url: string;
  alt: string;
  className?: string;
  displayName: string;
}) => {
  return (
    <Image
      src={url}
      alt={alt}
      width={450}
      height={400}
      className={
        "mx-auto filter dark:saturate-30 dark:brightness-70 dark:hue-rotate-0 saturate-150 brightness-110 hue-rotate-180 " +
        className
      }
    />
  );
};

interface PageHeaderProps {
  // children: (React.ReactElement & { displayName: string })[];
  children: React.ReactElement<{ displayName: string }>[];
  className?: string;
  classNames?: {
    leftWrapper?: string;
    rightWrapper?: string;
  };
}

const PageHeader = (props: PageHeaderProps) => {
  const PHTitle = props.children.find(
    (child) =>
      React.isValidElement(child) &&
      child.props.displayName === "PageHeaderTitle"
  );
  const PHText = props.children.find(
    (child) =>
      React.isValidElement(child) &&
      child.props.displayName === "PageHeaderText"
  );
  const PHActionButton = props.children.find(
    (child) =>
      React.isValidElement(child) &&
      child.props.displayName === "PageHeaderActionButton"
  );
  const PHImage = props.children.find(
    (child) =>
      React.isValidElement(child) &&
      child.props.displayName === "PageHeaderImage"
  );

  return (
    <header
      className={"p-4 grid grid-cols-1 sm:grid-cols-2 gap-6 " + props.className}
    >
      <div
        className={
          "flex flex-col justify-center " + props.classNames?.leftWrapper
        }
      >
        {PHTitle}
        {PHText}
        {PHActionButton}
      </div>
      <div className={"relative " + props.classNames?.rightWrapper}>
        {PHImage}
      </div>
    </header>
  );
};

export default PageHeader;
