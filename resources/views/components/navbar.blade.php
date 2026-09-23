<header class="navbar-wrapper">
    <nav class="navbar-pill-container">
        <!-- Logo Go Travel -->
        <a href="{{ url('/') }}" class="navbar-brand">
            <div class="brand-logo-badge">
                <i class="fa-solid fa-bus"></i>
            </div>
            <div class="brand-text-group">
                <span class="brand-title-go">GO</span>
                <span class="brand-subtitle-travel">Travel</span>
            </div>
        </a>

        <!-- Desktop Menu -->
        <ul class="navbar-nav-menu" id="navMenu">
            <li class="nav-item">
                <a href="{{ url('/') }}" class="nav-link active">Beranda</a>
            </li>
            <li class="nav-item">
                <a href="#paket-wisata" class="nav-link">Paket Wisata</a>
            </li>
            <li class="nav-item">
                <a href="#destinasi" class="nav-link">Destinasi</a>
            </li>
            <li class="nav-item">
                <a href="#about" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#contact" class="nav-link">Contact</a>
            </li>
        </ul>

        <!-- Profil Button -->
        <div class="navbar-action-group">
            <a href="#profil" class="nav-profile-btn">
                <i class="fa-regular fa-user"></i>
                <span>Profil</span>
            </a>
            <!-- Mobile Toggle -->
            <button class="mobile-toggle-btn" id="mobileToggle" aria-label="Toggle Navigation">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    </nav>
</header>
