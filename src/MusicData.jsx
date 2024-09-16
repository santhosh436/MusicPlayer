const songs = [
    {
      id: 1,
      name: "Dummu Duli",
      image: "./images/Dummu Duli.jpg",
      artist: "",
      album: "Santhosh",
      duration: "3:45",
      categories: {
        massSongs: true,
        evergreenSongs: true,
        trendingNow: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
      id: 2,
      name: "Jinthaak Chithaka",
      image: "./images/Jinthaak Chithaka.jpg",
      artist: "Artist 2",
      album: "Album 2",
      duration: "4:05",
      categories: {
        massSongs: true,
        newestSongs: true,
        trendingNow: true,
      },
      song:"./media/[iSongs.info] 01 - Jinthaak Chithaka.mp3"
    },
    {
      id: 3,
      name: "Massu Maranam",
      image: "./images/Massu Maranam.jpg",
      artist: "Artist 3",
      album: "Album 3",
      duration: "3:20",
      categories: {
        newestSongs: true,
        evergreenSongs: true,
        trendingNow: true,
      },
      song:"./media/[iSongs.info] 01 - Massu Maranam.mp3"
    },
    {
      id: 4,
      name: "Chitike",
      image: "./images/Chitike.jpg",
      artist: "Artist 4",
      album: "Album 4",
      duration: "4:10",
      categories: {
        massSongs: true,
        trendingNow: true,
        topAlbums: true,
      },
      song:"./media/[iSongs.info] 02 - Chitike.mp3"
    },
    {
      id: 5,
      name: "I Wanna Fly",
      image: "./images/I Wanna Fly.jpg",
      artist: "Artist 5",
      album: "Album 5",
      duration: "2:50",
      categories: {
        newestSongs: true,
        trendingNow: true,
        topArtists: true,
      },
      song:"./media/[iSongs.info] 02 - I Wanna Fly.mp3"
    },
    {
      id: 6,
      name: "Pilla Padesaave",
      image: "./images/Pilla_Padesaave.jpg",
      artist: "Artist 6",
      album: "Album 6",
      duration: "3:35",
      categories: {
        massSongs: true,
        evergreenSongs: true,
        podcast: true,
      },
      song:"./media/[iSongs.info]_01_-_Pilla_Padesaave.mp3"
    },
    {
      id: 7,
      name: "Teliyade Teliyade",
      image: "./images/Teliyade_Teliyade.jpg",
      artist: "Artist 7",
      album: "Album 7",
      duration: "4:25",
      categories: {
        trendingNow: true,
        recentlyPlayed: true,
        newReleases: true,
      },
      song:"./media/[iSongs.info]_02_-_Teliyade_Teliyade.mp3"
    },
    {
      id: 8,
      name: "Song 8",
      image: "song8.jpg",
      artist: "Artist 8",
      album: "Album 8",
      duration: "3:55",
      categories: {
        evergreenSongs: true,
        topPlaylists: true,
        topIndieArtists: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
      id: 9,
      name: "Song 9",
      image: "song9.jpg",
      artist: "Artist 9",
      album: "Album 9",
      duration: "5:00",
      categories: {
        newestSongs: true,
        trendingNow: true,
        massSongs: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
        id: 16,
        name: "Song 9",
        image: "song9.jpg",
        artist: "Artist 9",
        album: "Album 9",
        duration: "5:00",
        categories: {
          newestSongs: true,
          trendingNow: true,
          massSongs: true,
        },
        song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
        id: 17,
        name: "Song 9",
        image: "song9.jpg",
        artist: "Artist 9",
        album: "Album 9",
        duration: "5:00",
        categories: {
          newestSongs: true,
          trendingNow: true,
          massSongs: true,
        },
        song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    
    {
      id: 18,
      name: "Song 10",
      image: "song10.jpg",
      artist: "Artist 10",
      album: "Album 10",
      duration: "3:40",
      categories: {
        evergreenSongs: true,
        topAlbums: true,
        massSongs: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
      id: 11,
      name: "Song 11",
      image: "song11.jpg",
      artist: "Artist 11",
      album: "Album 11",
      duration: "3:15",
      categories: {
        massSongs: true,
        topIndieArtists: true,
        newReleases: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
      id: 12,
      name: "Song 12",
      image: "song12.jpg",
      artist: "Artist 12",
      album: "Album 12",
      duration: "4:00",
      categories: {
        newestSongs: true,
        topPlaylists: true,
        podcast: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
      id: 13,
      name: "Song 13",
      image: "song13.jpg",
      artist: "Artist 13",
      album: "Album 13",
      duration: "4:30",
      categories: {
        trendingNow: true,
        topArtists: true,
        recentlyPlayed: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
      id: 14,
      name: "Song 14",
      image: "song14.jpg",
      artist: "Artist 14",
      album: "Album 14",
      duration: "2:45",
      categories: {
        massSongs: true,
        evergreenSongs: true,
        topAlbums: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
      id: 15,
      name: "Song 14",
      image: "song14.jpg",
      artist: "Artist 14",
      album: "Album 14",
      duration: "2:45",
      categories: {
        massSongs: true,
        evergreenSongs: true,
        topAlbums: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
      id: 16,
      name: "Song 14",
      image: "song14.jpg",
      artist: "Artist 14",
      album: "Album 14",
      duration: "2:45",
      categories: {
        massSongs: true,
        evergreenSongs: true,
        topAlbums: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
      id: 17,
      name: "Song 14",
      image: "song14.jpg",
      artist: "Artist 14",
      album: "Album 14",
      duration: "2:45",
      categories: {
        massSongs: true,
        evergreenSongs: true,
        topAlbums: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
      id: 18,
      name: "Song 15",
      image: "song15.jpg",
      artist: "Artist 15",
      album: "Album 15",
      duration: "3:50",
      categories: {
        newestSongs: true,
        topIndieArtists: true,
        trendingNow: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
      id: 18,
      name: "Song 10",
      image: "song10.jpg",
      artist: "Artist 10",
      album: "Album 10",
      duration: "3:40",
      categories: {
        evergreenSongs: true,
        topAlbums: true,
        massSongs: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
      id: 18,
      name: "Song 10",
      image: "song10.jpg",
      artist: "Artist 10",
      album: "Album 10",
      duration: "3:40",
      categories: {
        evergreenSongs: true,
        topAlbums: true,
        massSongs: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
      id: 18,
      name: "Song 10",
      image: "song10.jpg",
      artist: "Artist 10",
      album: "Album 10",
      duration: "3:40",
      categories: {
        evergreenSongs: true,
        topAlbums: true,
        massSongs: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
      id: 18,
      name: "Song 10",
      image: "song10.jpg",
      artist: "Artist 10",
      album: "Album 10",
      duration: "3:40",
      categories: {
        evergreenSongs: true,
        topAlbums: true,
        massSongs: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
    {
      id: 18,
      name: "Song 10",
      image: "song10.jpg",
      artist: "Artist 10",
      album: "Album 10",
      duration: "3:40",
      categories: {
        evergreenSongs: true,
        topAlbums: true,
        massSongs: true,
      },
      song:"./media/[iSongs.info] 01 - Dhummu Dholi.mp3"
    },
  ];
  
  export { songs };
  