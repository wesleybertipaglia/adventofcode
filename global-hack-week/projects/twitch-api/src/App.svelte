<script lang="ts">
  import { onMount } from "svelte";

  let rewards: string | any[] = [];
  let channelId = ""; // ex: 274637212

  async function fetchRewards() {
    const response = await fetch(
      `https://api.twitch.tv/helix/channel_points/custom_rewards?broadcaster_id=${channelId}`,
      {
        headers: {
          client_id: "", // enter your client id here
          client_secret: "", // enter your client secret here
          grant_type: "client_credentials",
        },
      }
    );
    const data = await response.json();
    rewards = data.data;
  }

  function clearRewards() {
    rewards = [];
  }
</script>

<main>
  <div class="card">
    <h1>Twitch API</h1>
    <form class="channel-form" on:submit|preventDefault={fetchRewards}>
      <div class="form-group">
        <label for="channelId">Enter the channel id here</label>
        <input
          type="text"
          name="channelId"
          placeholder="000000000"
          bind:value={channelId}
        />
      </div>

      <div class="form-group">
        <button type="submit" class="bg-svelte w-100">Get Rewards</button>
        <button class="w-100" on:click={clearRewards}>Turn off</button>
      </div>
    </form>
    {#if rewards.length > 0}
      <ul>
        {#each rewards as reward}
          <li>{reward.title}</li>
        {/each}
      </ul>
    {:else if rewards.length === 0}
      <p>No rewards</p>
    {:else}
      <p>Loading...</p>
    {/if}
  </div>
</main>
