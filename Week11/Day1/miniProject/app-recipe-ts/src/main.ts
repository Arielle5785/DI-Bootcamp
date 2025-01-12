import RecipeItem from "./features/model/RecipeItem";
import RecipeCollection from "./features/model/RecipeCollection";
import ListTemplate from "./templates/RecipeTemplate";
import {v4 as uuidv4} from 'uuid'

const initApp = () :void => {
  const recipeList = RecipeCollection.instance
  const template = ListTemplate.instance

  const recipeEntryForm = document.getElementById('recipeEntryForm') as HTMLFormElement

  recipeEntryForm.addEventListener('submit', (e:SubmitEvent) :void => {
    e.preventDefault()


    const RecipeNameInput = document.getElementById('recipeName') as HTMLInputElement
    let recipeName : string = RecipeNameInput.value

    const ingredientsInput = document.getElementById('ingredients') as HTMLTextAreaElement
    let ingredients : string[] = ingredientsInput.value.split("\n")

    const instructionsInput = document.getElementById('instructions') as HTMLInputElement
    let instructions : string = instructionsInput.value

    if (!recipeName.trim() || ingredients.length === 0 || !instructions.trim()) return

    const newRecipe = new RecipeItem(uuidv4(), recipeName, ingredients, instructions)
    recipeList.addItem(newRecipe)
    template.render(recipeList)
    recipeEntryForm.reset()


  })

  const clearButton = document.getElementById('clearRecipesButton') as HTMLButtonElement
  clearButton.addEventListener('click', () => {
    recipeList.clearList()
    template.clear()
  })

  recipeList.load()
  template.render(recipeList)
}

initApp()