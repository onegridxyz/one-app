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

const findById = async (data: any) => {
  const [_, id] = data?.queryKey ?? [];
  const response = await axiosInstance.get<Category>(`${CATEGORY_RESOURCE_URI}/${id}`);
  return response.data;
}

const create = async (category: Category) => {
  const response = await axiosInstance.post<Category>(CATEGORY_RESOURCE_URI, { ...category });
  return response.data;
}

const update = async (id: number, category: Category) => {
  const response = await axiosInstance.put<Category>(`${CATEGORY_RESOURCE_URI}/${id}`, { ...category });
  return response.data;
}

const deleteById = async (id: number) => {
  const response = await axiosInstance.delete<void>(`${CATEGORY_RESOURCE_URI}/${id}`);
  return response.data;
}

export const useGetCategories = () => {
 const context = useQuery(
    [CATEGORY_RESOURCE_URI],
    findAll
 );
 return { ...context };
};

export {findAll, findById, create, update, deleteById}
