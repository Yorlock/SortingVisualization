<script setup>
import { ref } from 'vue'
import { useArrayStore } from '@/stores/array'

const array = useArrayStore();
</script>

<template>
    <div class="container mb-3">
        <form @submit.prevent="">
            <!-- Manual Insert -->
            <div class="mb-3">
                <label class="form-label">Insert a number to the array</label>
                <div class="d-flex gap-2">
                    <input type="number" v-model.number="manualNumber" class="form-control w-50"
                        placeholder="Enter number" />
                    <button @click.prevent="array.insertNumber(manualNumber)" class="btn btn-primary">
                        Insert
                    </button>
                </div>
            </div>

            <!-- Random Generator -->
            <div class="mb-3">
                <div class="d-flex align-items-center gap-2 mb-1">
                    <label class="form-label mb-0">Generate random numbers</label>
                </div>
                <div class="d-flex gap-2">
                    <input type="number" v-model.number="randomCount" class="form-control w-50"
                        placeholder="How many numbers?" />
                    <button @click.prevent="array.generateRandom(randomCount)" class="btn btn-primary">
                        Generate
                    </button>
                </div>
            </div>

            <!-- Control buttons -->
            <div class="mt-3 d-flex gap-2">
                <button @click.prevent="array.sortArray()" class="btn btn-secondary">
                    Sort
                </button>
                <button @click.prevent="array.restartArray()" class="btn btn-danger">
                    Restart
                </button>
            </div>

            <!-- Display the array -->
            <div class="mt-4">
                <h5>Array:</h5>
                <pre class="array-display">{{ array.numbers }}</pre>
            </div>
        </form>
    </div>
</template>

<style scoped>
.array-display {
    background: #f8f9fa;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    display: inline-block;
    min-width: 150px;
}
</style>
