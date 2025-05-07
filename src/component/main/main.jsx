export const Main = () => {
  return (
    <main>
      <article class="product-image">
        <div class="box-image">
          <img src="images/image-product-1.jpg" alt=" product 1" />
          <img src="images/image-product-2.jpg" alt="product 2" />
          <img src="images/image-product-3.jpg" alt="product 3" />
          <img src="images/image-product-4.jpg" alt="product 4" />
        </div>

        <div class="thumbnail-image">
          <img
            src="images/image-product-1-thumbnail.jpg"
            alt="product 1 thumbnail"
          />
          <img
            src="images/image-product-2-thumbnail.jpg"
            alt="product 2 thumbnail"
          />
          <img
            src="images/image-product-3-thumbnail.jpg"
            alt="product 3 thumbnail"
          />
          <img
            src="images/image-product-4-thumbnail.jpg"
            alt="product 4 thumbnail"
          />
        </div>
      </article>

      <article class="product-description">
        <p class="name_product">Sneaker Company</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p class="sneaker_description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <p class="sneaker_price">
          $125.00
          <small>50%</small>
        </p>

        <p class="regular_price">$250.00</p>

        <form>
          <input type="button" value="-" />
          <p>0</p>
          <input type="button" value="+" />
          <button type="submit">
            <i class="fa-solid fa-cart-shopping"></i>
            Add to cart
          </button>
        </form>
      </article>
    </main>
  );
};
