import React from "react";
import { SkeletonComponent } from "../../components/Loading/skeleton";
import './EventCardLoading.css'

export const EventCardLoading: React.FC = () => {
  return (
    <div className="event__card__loading">
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <div className="event__card__tags">
        <SkeletonComponent />
        <SkeletonComponent />
        <SkeletonComponent />
      </div>
      <SkeletonComponent />
    </div>
  );
};
