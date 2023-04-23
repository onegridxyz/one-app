import {
  useQuery,
} from '@tanstack/react-query'
import axiosInstance from '../../utils/axios';
import { Category } from './category.interface';

const CATEGORY_RESOURCE_URI = '/api/categories';

const findAll = async () => {
  const response = await axiosInstance.get<Category[]>(CATEGORY_RESOURCE_URI);
  return response.data;
}

export const useGetCategories = () => {
 const context = useQuery(
    [CATEGORY_RESOURCE_URI],
    findAll
 );
 return { ...context };
};
