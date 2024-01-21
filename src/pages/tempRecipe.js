import HeroImage from '../assets/recipeImages/chocolateRedWineCupcakes/cupcakes-square.webp'
import { useEffect, useState } from 'react'

function TempRecipe() {
  // sticky cards
  const [h1Height, setH1Height] = useState(0)
  const [stepTitleHeight, setStepTitleHeight] = useState(0)

  useEffect(() => {
    const h1Element = document.getElementById('recipe-title')
    const stepTitle = document.getElementById('step-title')

    if (h1Element) {
      const height = getComputedStyle(h1Element).height
      setH1Height(height)
    }

    if (stepTitle) {
      const titleHeight = getComputedStyle(stepTitle).height
      setStepTitleHeight(titleHeight)
    }
  }, [])

  useEffect(() => {
    const cards = document.querySelectorAll('.recipe-step-card')
    const titleId = document.getElementById('')

    cards.forEach((card) => {
      card.style.top = `calc(${h1Height} + 7rem`
      // card.style.paddingTop = `${h1Height}`;
    })
  }, [h1Height])

  return (
    <div>
      {/* Hero */}

      <body>
        <div className="recipe-page-hero">
          <div className="recipe-intro">
            <h1 id="recipe-title">Chocolate Red Wine Cupcakes</h1>
            <p>
              These boozy red wine cupcakes are perfect for Valentine's day,
              girl's night, or just when you're bored on a Sunday afternoon,
              like I was when I first made them.
            </p>
            <div className="pairing-list">
              <p className="bold">Pairs with:</p>
              <ul>
                <li>
                  <i class="fa-solid fa-wine-glass"></i>Pizzella Malbec
                </li>
                <li>
                  <i class="fa-regular fa-snowflake"></i>Cold days
                </li>
                <li>
                  <i class="fa-regular fa-face-meh-blank"></i>General moodiness
                </li>
              </ul>
            </div>

            {/* Step cards */}
          </div>

          <img src={HeroImage} alt="cupcakes" className="recipe-hero-image" />
        </div>

        {/* Step card */}

        <div className="recipe-step-card" id="1">
          <div className="recipe-step-heading" id="step-title">
            <p>Combine dry ingredients</p>
          </div>

          <div className="recipe-step">
            <div className="recipe-sub-step">
              <ul>
                <li>
                  <p>Flour, all purpose</p>
                  <p>1 cup</p>
                </li>
                <li>
                  <p>Unsweetened cocoa powder</p>
                  <p>6 tbsp</p>
                </li>
                <li>
                  <p>Baking soda</p>
                  <p>3/4 tsp</p>
                </li>
                <li>
                  <p>Salt</p>
                  <p>1/4 tsp</p>
                </li>
              </ul>
              <p>Stir together dry ingredients. Set aside.</p>
            </div>
          </div>
        </div>

        {/* Step card */}

        <div className="recipe-step-card" id="2">
          <div className="recipe-step-heading" id="step-title">
            <p>Cream the butter</p>
          </div>

          <div className="recipe-step">
            <div className="recipe-sub-step">
              <ul>
                <li>
                  <p>Butter, unsalted</p>
                  <p>1/2 cup</p>
                </li>
                <li>
                  <p>Sugar, granulated</p>
                  <p>3/4 cup</p>
                </li>
                <li>
                  <p>Marscarpone cheese</p>
                  <p>4 oz</p>
                </li>
              </ul>
              <p>Beat on medium high until light and fluffy.</p>
            </div>
          </div>
        </div>

        <div className="recipe-step-card" id="3">
          <div className="recipe-step-heading" id="step-title">
            <p>Add vanilla and egg</p>
          </div>

          <div className="recipe-step">
            <div className="recipe-sub-step">
              <ul>
                <li>
                  <p>Vanilla</p>
                  <p>1/2 tsp</p>
                </li>
                <li>
                  <p>Egg</p>
                  <p>1 large</p>
                </li>
              </ul>
              <p>Mix into fluffed butter.</p>
            </div>
          </div>
        </div>

        {/* Step card */}

        {/* Step card */}

        <div className="recipe-step-card" id="4">
          <div className="recipe-step-heading" id="step-title">
            <p>Add red wine</p>
          </div>

          <div className="recipe-step">
            <div className="recipe-sub-step">
              <ul>
                <li>
                  <p>Red wine</p>
                  <p>1/2 cup</p>
                </li>
              </ul>
              <div>
                <p>Alternate adding dry ingredients and wine to butter mix.</p>
                <p>Between each addition, mix until fully incorporated.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step card */}

        <div className="recipe-step-card" id="5">
          <div className="recipe-step-heading" id="step-title">
            <p>Fill tins</p>
          </div>

          <div className="recipe-step">
            <div className="recipe-sub-step no-ingredients">
              {/* <ul>
                                <li>
                                    <p>Red wine</p>
                                    <p>5 cups</p>
                                </li>
                            </ul> */}
              <div>
                <p>Fill lined muffin tins 2/3 full.</p>
                <p>
                  Bake 16-20 minutes, until set. (Toothpick should come off with
                  a few crumbs.)
                </p>
                <p>Cool completely before frosting.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step card */}

        <div className="recipe-step-card" id="6">
          <div className="recipe-step-heading" id="step-title">
            <p>Make frosting</p>
          </div>

          <div className="recipe-step">
            <div className="recipe-sub-step">
              <ul>
                <li>
                  <p>Butter, unsalted</p>
                  <p>1/2 cup</p>
                </li>
                <li>
                  <p>Cream cheese</p>
                  <p>4 oz</p>
                </li>
                <li>
                  <p>Vanilla extract</p>
                  <p>1/2 tsp</p>
                </li>
                <li>
                  <p>Heavy cream</p>
                  <p>1/2 tbsp</p>
                </li>
                <li>
                  <p>Sugar, powdered</p>
                  <p>2 1/2 cup</p>
                </li>
                <li>
                  <p>Red wine</p>
                  <p>2 tbsp</p>
                </li>
              </ul>
              <div>
                <p>Beat butter and cream cheese.</p>
                <p>
                  Add powdered sugar 1 cup at a time. Add cream and vanilla.
                </p>
                <p>Add red wine.</p>
                <p>Beat until fully incorporated and smooth.</p>
              </div>
            </div>
          </div>
        </div>
      </body>

      <div className="down-page-content">
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). Where
          does it come from? Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.
          Rackham.
        </p>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). Where
          does it come from? Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.
          Rackham.
        </p>
      </div>
    </div>
  )
}

export default TempRecipe
