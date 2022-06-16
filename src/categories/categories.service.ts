import { Injectable } from '@nestjs/common'
import { Category } from './dto/category.gql'

@Injectable()
export class CategoriesService {
	async findAll(): Promise<Category[]> {
		return [{ id: '1', name: 'teste' }]
	}
}
