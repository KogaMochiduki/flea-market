import useSWR from 'swr'
import type { ApiContext, Category, Condition, Product } from '@/types'

export type UseSearchProps = {
  /**
   * 商品カテゴリ
   */
  category?: Category
  /**
   * 商品状態
   */
  conditions?: Condition[]
  /**
   * 所有するユーザーID
   */
  userId?: number
  /**
   * ソートするキー
   */
  sort?: keyof Omit<Product, 'owner'>
  /**
   * 昇順or降順
   */
  order?: 'asc' | 'desc'
  /**
   * 初期状態
   */
  initial?: Product[]
}

export type UseSearch = {
  /**
   * 検索にヒットした商品リスト
   */
  products: Product[]
  /**
   * ロードフラグ
   */
  isLoading: boolean
  /**
   * エラーフラグ
   */
  isError: boolean
}

/**
 * プロダクトAPI（一覧取得）のカスタムフック
 * @param context APIコンテキスト
 * @param params 検索条件
 * @returns 商品一覧とAPI呼び出しの状態
 */
const useSearch = (
  context: ApiContext,
  {
    category,
    userId,
    conditions,
    initial,
    sort = 'id',
    order = 'desc',
  }: UseSearchProps = {},
): UseSearch => {
  const path = `${context.apiRootUrl.replace(/\/$/g, '')}/products`
  const params = new URLSearchParams()

  if (category) {
    params.append('category', category)
  }
  if (userId) {
    params.append('owner.id', `${userId}`)
  }
  if (conditions) {
    conditions.forEach((condition) => params.append('condition', condition))
  }
  if (sort) {
    params.append('_sort', sort)
  }
  if (order) {
    params.append('_order', order)
  }
  const query = params.toString()
  const { data, error } = useSWR<Product[]>(
    query.length > 0 ? `${path}?${query}` : path,
  )

  return {
    products: data ?? initial ?? [],
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useSearch
