import MealsProvider from './MealsProvider'
import MealsList from './MealsList'
import Counter from './Counter'

const MealsContainer = () => {
  return (
    <div>
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  )
}

export default MealsContainer
