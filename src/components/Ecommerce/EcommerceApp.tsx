import stylesHeader from './header.module.css'
import stylesHome from './homepage.module.css'
import './global.css'
const EcommerceApp: React.FC = () => {
  return (
    <div className="global">
      <h1>Ecommerce App</h1>

      {/* HEADER */}
      <header className={stylesHeader.header}>
        <div className={stylesHeader.leftSection}>
          <a
            href="/"
            className={stylesHeader.headerLink}
          >
            <img
              className={stylesHeader.logo}
              src="/images/logo-white.png"
              alt="Logo"
            />
            <img
              className={stylesHeader.mobileLogo}
              src="/images/mobile-logo-white.png"
              alt="Mobile logo"
            />
          </a>
        </div>

        <div className={stylesHeader.middleSection}>
          <input
            className={stylesHeader.searchBar}
            type="text"
            placeholder="Search"
          />
          <button className={stylesHeader.searchButton}>
            <img
              className={stylesHeader.searchIcon}
              src="/images/icons/search-icon.png"
              alt="Search"
            />
          </button>
        </div>

        <div className={stylesHeader.rightSection}>
          <a
            href="/orders"
            className={stylesHeader.ordersLink}
          >
            <span className={stylesHeader.ordersText}>Orders</span>
          </a>

          <a
            href="/checkout"
            className={stylesHeader.cartLink}
          >
            <img
              className={stylesHeader.cartIcon}
              src="/images/icons/cart-icon.png"
              alt="Cart"
            />
            <div className={stylesHeader.cartQuantity}>3</div>
            <div className={stylesHeader.cartText}>Cart</div>
          </a>
        </div>
      </header>

      <main className={stylesHome.homePage}>
        <div className={stylesHome.productsGrid}>
          <div className={stylesHome.productContainer}>
            <div className={stylesHome.productImageContainer}>
              <img
                className={stylesHome.productImage}
                src="/images/products/athletic-cotton-socks-6-pairs.jpg"
                alt="Socks"
              />
            </div>

            <div className={stylesHome.productName}>
              Black and Gray Athletic Cotton Socks - 6 Pairs
            </div>

            <div className={stylesHome.productRatingContainer}>
              <img
                className={stylesHome.productRatingStars}
                src="/images/ratings/rating-45.png"
                alt="Rating"
              />
              <div className={stylesHome.productRatingCount}>87</div>
            </div>

            <div className={stylesHome.productPrice}>$10.90</div>

            <div className={stylesHome.productQuantityContainer}>
              <select defaultValue="1">
                {[...Array(10)].map((_, i) => (
                  <option
                    key={i + 1}
                    value={i + 1}
                  >
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className={stylesHome.productSpacer} />

            <div className={stylesHome.addedToCart}>
              <img
                src="/images/icons/checkmark.png"
                alt="Added"
              />
              Added
            </div>
            <button className={stylesHome.addToCartButton}>Add to Cart</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default EcommerceApp
