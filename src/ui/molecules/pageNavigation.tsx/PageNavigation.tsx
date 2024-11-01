"use client";
import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; 
import Button from '../../atoms/Button'; 
import Paragraph from '../../atoms/Parragraph';
import { IPageable } from '@/models/pagination.model';
import { MdAddCircle } from "react-icons/md";

interface PageNavigationProps {
  pagination: IPageable;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
}

const PageNavigation = ({
  pagination,
  totalPages,
  onNext,
  onPrevious,
}: PageNavigationProps) => {
  const currentPage = pagination?.pageNumber + 1;

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;
  return (
    <>
      <Button
        onClick={onPrevious}
        icon={<MdAddCircle />}
        // bgColor={isPreviousDisabled ? theme.colors.bgInactiveTabs : theme.colors.bgPaginationButtons}
        // textColorIcon={theme.colors.textMediumGray}
        disabled={isPreviousDisabled}
       
      />
      <Paragraph>
        Página {currentPage} de {totalPages}
      </Paragraph>
      <Button
        onClick={onNext}
        icon={<MdAddCircle />}
        // bgColor={isNextDisabled ? theme.colors.bgInactiveTabs : theme.colors.bgPaginationButtons}
        // textColorIcon={theme.colors.textMediumGray}
        disabled={isNextDisabled}
       
      />
    </>
  );
};

export default PageNavigation;
